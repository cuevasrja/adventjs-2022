// MOV Vxx,Vyy: copia el valor del registro Vxx al registro Vyy;
// MOV n,Vxx: asigna la constante numérica n al registro Vxx (sobrescribe si ya tiene un valor);
// ADD Vxx,Vyy: calcula (Vxx + Ryy) y almacena el resultado en Vxx;
// DEC Vxx: decrementa el valor de Vxx en 1.
// INC Vxx: incrementa el valor de Vxx en 1.
// JMP i: salta a la instrucción número i si V00 es diferente de 0. i está garantizado que sea un número de instrucción válido y 0 sería la primera instrucción.

// * Opcion A
// function executeCommands(commands) {
//     let data = new Array(8).fill(0);
//     const commandsList = {
//         MOV: function(x, y, _){
//             if(x.toUppercase().includes('V')){
//                 data[parseInt(y.slice(1))] = data[parseInt(x.slice(1))];
//             }
//             else{
//                 data[parseInt(y.slice(1))] = parseInt(x);
//             }
//         },
//         ADD: function(x, y, _){
//             const a = data[parseInt(x.slice(1))];
//             const b = data[parseInt(y.slice(1))];
//             data[parseInt(x.slice(1))] = parseInt(a) + parseInt(b);
//         },
//         DEC: function(x, _){
//             data[parseInt(x.slice(1))] -= 1;
//         },
//         INC: function(x, _){
//             data[parseInt(x.slice(1))] += 1;
//         },
//         JMP: function(i, j){
//             const newCommands = commands.slice(i, j);
//             while(data[0] !== 0){
//                 newCommands.forEach(com => {
//                     const [command, params] = com.split(' ');
//                     commandsList[command](...params.split(','))
//                 });
//             }
//         }
//     };
//     commands.forEach((com, i) => {
//         const [command, params] = com.split(' ');
//         commandsList[command](...params.split(','), i)
//     });
//     return data.map( val =>{
//         if(val > 255) return 256 - val;
//         else if(val < 0) return val + 256
//         return val
//     })
// }

// ? Opcion B
// function executeCommands(){
//     const maxValue = 256;

//     const cpu = {
//         V00: 0,
//         V01: 0,
//         V02: 0,
//         V03: 0,
//         V04: 0,
//         V05: 0,
//         V06: 0,
//         V07: 0
//     };

//     const ACTIONS = {
//         MOV: (value, registry) => {
//             if (value.startsWith('V')) {
//             cpu[registry] = cpu[value];
//             } else {
//             cpu[registry] = +value;
//             }
//         },
//         ADD: (registry1, registry2) => {
//             cpu[registry1] = (cpu[registry1] + cpu[registry2]) % maxValue;
//         },
//         DEC: registry => {
//             cpu[registry] = (cpu[registry] - 1 + maxValue) % maxValue;
//         },
//         INC: registry => {
//         cpu[registry] = (cpu[registry] + 1) % maxValue;
//         },
//         JMP: (instructionPosition, index) => {
//             if (cpu.V00 > 0) {
//                 commands.slice(instructionPosition, index + 1).forEach(command => executeAction(command, index));
//             }
//         }
//     };

//     const executeAction = (action, index) => {
//         const [command, args] = action.split(' ');
//         const argsList = args.split(',').map(argument => argument.replace(/V(\d+)/, (_, p1) => `V0${p1 % 8}`));
//         ACTIONS[command](...argsList, index);
//     };

//     commands.forEach(executeAction);

//     return Object.values(cpu)
// }

// ! Opcion C
function executeCommands(commands){
    let commandsToExecute = [...commands];

    const CPU_MAX_VALUE = 256;
  
    const CPU_REGISTRIES = [0, 0, 0, 0, 0, 0, 0, 0];
  
    const ACTIONS = {
      MOV: args => {
        const [valueOrRegistry1, registry2] = args;
        CPU_REGISTRIES[+registry2.at(-1)] =
          CPU_REGISTRIES[+valueOrRegistry1.at(-1)] * +valueOrRegistry1.startsWith('V') + ~~valueOrRegistry1;
      },
      ADD: args => {
        const [registry1, registry2] = args.map(registryPosition => +registryPosition.at(-1));
        CPU_REGISTRIES[registry1] = (CPU_REGISTRIES[registry1] + CPU_REGISTRIES[registry2]) % CPU_MAX_VALUE;
      },
      DEC: args => {
        const registry = args.map(registryPosition => +registryPosition.at(-1));
        CPU_REGISTRIES[registry] = (CPU_REGISTRIES[registry] - 1 + CPU_MAX_VALUE) % CPU_MAX_VALUE;
      },
      INC: args => {
        const registry = args.map(registryPosition => +registryPosition.at(-1));
        CPU_REGISTRIES[registry] = (CPU_REGISTRIES[registry] + 1) % CPU_MAX_VALUE;
      },
      JMP: args => {
        const instructionPosition = args.map(registryPosition => +registryPosition.at(-1));
        commandsToExecute = commandsToExecute.concat(
          commandsToExecute.slice(
            instructionPosition,
            (commandsToExecute.indexOf(`JMP ${instructionPosition}`) + 1) * !!CPU_REGISTRIES[0]
          )
        );
      }
    };
  
    for (let i = 0; i < commandsToExecute.length; i++) {
      const [command, args] = commandsToExecute[i].split(' ');
      const argsList = args.split(',');
      ACTIONS[command](argsList);
    }
  
    return CPU_REGISTRIES;
}

const result1 = executeCommands([
  'MOV 5,V00',  // V00 es 5
  'MOV 10,V01', // V01 es 10
  'DEC V00',    // V00 ahora es 4
  'ADD V00,V01' // V00 = V00 + V01 = 14
]);
console.log(result1);
// Output: [14, 10, 0, 0, 0, 0, 0]

const result2 = executeCommands([
  'MOV 255,V00', // V00 es 255
  'INC V00',     // V00 es 256, desborda a 0
  'DEC V01',     // V01 es -1, desborda a 255
  'DEC V01'      // V01 es 254
])
console.log(result2);
// Output: [0, 254, 0, 0, 0, 0, 0]

const result3 = executeCommands([
  'MOV 10,V00', // V00 es 10
  'DEC V00',    // decrementa V00 en 1  <---┐
  'INC V01',    // incrementa V01 en 1      |
  'JMP 1',      // bucle hasta que V00 sea 0 ----┘
  'INC V06'     // incrementa V06 en 1
])
console.log(result3);
// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]