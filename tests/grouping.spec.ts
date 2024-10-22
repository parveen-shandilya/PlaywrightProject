import { test, expect } from '../fixture/pomFixture.ts';
import * as testData from '../resources/testData.json'; 
import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';
import { stringify } from 'csv-stringify';


const csvData = parse(fs.readFileSync(path.join(__dirname,'..','resources','testData.csv')),{
  columns :true,
  skip_empty_lines:true
})

test.describe('Suite',()=>{
  test.beforeAll(async () => {
    console.log("Database Connection setup . . . . ")
  });
  
  test.beforeEach(async () => {
    console.log("Clearing Cookies . . . .")
  });
  
  test.afterEach(async () => {
    console.log("Cache Removal . . . .")
  });
  
  test.afterAll(async () => {
    console.log("Database disconnect . . . .")
  });
  
  test('Test 1', async () => {
    console.log("Test 1 Block . . . .",testData.AdminUsername)
    console.log("Test 1 Block . . . .",testData.Password)
  });
  
  test(' Test 2', async () => {
    console.log("Test 2 Block . . . .",csvData[0].username)
  });  
})

test('Test 3', async () => {
  console.log("Test 3 Block . . . .")
  const filePath = path.join(__dirname,'..','resources','testData.csv');

  const newData = [
    { username: 'Alice Brown', password: 2545438 ,age:34},
    { username: 'Tom White', password: 224542,age:34},
  ];

  stringify(newData, { header: false }, (err, output) => {
    if (err) {
      console.error('Error while converting data to CSV:', err);
    } else {
      // Append the new CSV data to the file
      fs.appendFileSync(filePath, output, 'utf-8');
      console.log('Data successfully appended to CSV file!');
    }
  });


});

test('Test 4', async () => {
  console.log("Test 4 Block . . . .")
});