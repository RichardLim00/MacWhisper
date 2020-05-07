export function ConvertHumanToMachine(HumanLanguage) {
    let MachineLanguage = [];
    HumanLanguage.split('').forEach((character) => {
        MachineLanguage.push(character.charCodeAt(0).toString(2).padStart(8, '0'));
    })

    if(MachineLanguage.length !== 0){
        return MachineLanguage.join(' ');
    } else {
        return ''
    }
}

export function ConvertMachineToHuman(MachineLanguage) {
    let HumanLanguage = [];

    MachineLanguage.split(' ')
        .forEach((byte) => {
            let character = String.fromCharCode(parseInt(byte, 2))
            HumanLanguage.push(character);
        })

    if(HumanLanguage.length === 1 && HumanLanguage[0] === '\u0000'){
        return ''
    } else {
        return HumanLanguage.join('');
    }
}