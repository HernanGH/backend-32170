class RgbColorGenerator {

  generate():string {
    const max:number = 256;
    const min:number = 0;
    const red:number = Math.floor(Math.random() * (max - min)) + min;
    const green:number = Math.floor(Math.random() * (max - min)) + min;
    const blue:number = Math.floor(Math.random() * (max - min)) + min;
    return `RGB (${red},${green},${blue})`;
  }
}

const rgbColorGenerator = new RgbColorGenerator();

const color:string = rgbColorGenerator.generate();

console.log({color});