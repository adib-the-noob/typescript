interface TakePhoto {
    cameraMode : string
    filter: string
    burst: number
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string, 
        public burst: string
    ){

    }
}

class YouTube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string, 
        public burst: string,
        public short: string
    ){
        
    }
}