class RgbColor {

  create():string {
    const max:number = 256;
    const min:number = 0;
    const red:number = Math.floor(Math.random() * (max - min)) + min;
    const green:number = Math.floor(Math.random() * (max - min)) + min;
    const blue:number = Math.floor(Math.random() * (max - min)) + min;
    return `RGB (${red},${green},${blue})`;
  }
}

const main = new RgbColor();

const color:string = main.create();

console.log({color});