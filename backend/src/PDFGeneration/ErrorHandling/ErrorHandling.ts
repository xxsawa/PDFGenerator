import { Response } from "express";

function validateInputs(res: Response, inputs: any[]){
    if (inputs.some(x => x == undefined)) {
      console.log("eror")
      throw new Error("Some or all values are missing.")
    }
}

export default validateInputs;