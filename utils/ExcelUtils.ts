import * as testData from '../resources/testData.json'; 
import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';
import { stringify } from 'csv-stringify';

const filePath = path.join(__dirname,'..', 'resources', 'testData.csv');


export function readExcelData(){
    const csvData = parse(fs.readFileSync(filePath),{
        columns :true,
        skip_empty_lines:true
      })

      return csvData;
}

