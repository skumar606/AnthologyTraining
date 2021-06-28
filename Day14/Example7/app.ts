abstract class Media {
    abstract advertise(): string;
}

class PrintMedia extends Media {
    advertise() {
        return 'Print Media!';
    }
}

class SocialMedia extends Media {
    advertise() {
        return 'Social Media!';
    }

}

class VoiceMedia extends Media {
    advertise() {
        return 'Voice Media!';
    }
}


let pm = new PrintMedia();
let sm = new SocialMedia();
let vm = new VoiceMedia();

console.log(pm.advertise());
console.log(sm.advertise());
console.log(vm.advertise());