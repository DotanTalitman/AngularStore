
export class LoggerService {

  print(text:string){
    console.log(text);
  }

  printAlert(text:string){
    alert(text);
  }

  printWithHello(text:string){
    console.log(text+" hello")
  }
  constructor() { }

}
