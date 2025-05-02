const express = require("express")
const dotenv = require("dotenv")
const { drugs } = require("./data")

const app = express() //init expres
dotenv.config() //init dotenv

app.use(express.json())

const port = process.env.PORT

app.listen(port, (e) =>{
    if (e){
        console.log(e)
    }else{
        console.log( 'Server running on port ' + port)
    }
} )


// GET /drugs/antibiotics
// Return all drugs where category is "Antibiotic".

app.get("/drugs/antibiotics", (request, response) => {

    const antibiotics = drugs.filter((drug) => {
        return drug.category == 'Antibiotic'
    })

    response.json({
        success: true,
        antibiotics
    })
})

// GET /drugs/names
// Return an array of all drug names converted to lowercase.


app.get("/drugs/names",(request, response)=> {

    const name_Lower = drugs.map((each)=>{
        return each.name.toLowerCase()
       })
       

    response.json({
        success: true,
        name_Lower
    })
})


// POST /drugs/by-category
//Accept a category in the body and return all drugs under that category.
// Example body: { "category": "Antibiotic" }

app.post("/drugs/by-category", (request, response) => {
    const userInput = request.body // get user input
    if (!userInput){
        response.json({
            success: false,
            message: "no input"
            
        })
        return
    } // check if input was passed

    const category = userInput.category // picking the category from the body
    if (!category){
        response.json({
            success: false,
            message: "Invalid category or no category"
            
        })
        return
    } // ensures that there is a category passed

    const findByCategory = drugs.filter((drug) => drug.category == category)
    response.json({
        success: true,
        findByCategory
    })
})

// GET /drugs/names-manufacturers
// Return an array of objects showing each drug’s name and manufacturer.

app.get("/drugs/names-manufacturers", (request,response)=> {
    const afaOgwu = drugs.map((each) => {
         return {  name: each.name, manufacturer: each.manufacturer // return to the variable afaOgwu
        
}})
response.json({
    success: true,
    afaOgwu
})
})

// GET /drugs/prescription
// Return all drugs where isPrescriptionOnly is true.

app.get("/drugs/prescription", (request, response)=> {
    const requirePrescription = drugs.filter((each) => {
        return each.isPrescriptionOnly === true
       })

       response.json({
            success: true,
            requirePrescription
        })
})


//  GET /drugs/formatted
// Return a new array where each item is a string like:
// "Drug: [name] - [dosageMg]mg"

app.get("/drugs/formatted", (request, response)=>{
    const drugsName = drugs.map((each) => {
        return "Drug: " + each.name + " - " + each.dosageMg + "mg"
    })

    response.json({
        success:true,
        drugsName
    })
})


// GET /drugs/low-stock
// Return all drugs where stock is less than 50.

app.get("/drugs/low-stock", (request,response)=>{
    const stock = drugs.filter((drug) => {
        return drug.stock < 50
    })

    response.json({
        success:true,
        stock

    })
})


// GET /drugs/non-prescription
// Return all drugs where isPrescriptionOnly is false.

app.get("/drugs/non-prescription", (request, response)=>{
    const notPrescription = drugs.filter((each) => {
        return each.isPrescriptionOnly === false
       })

       response.json({
        success: true,
        notPrescription
       })
})

// POST /drugs/manufacturer-count
// Accept a manufacturer in the body and return how many drugs are produced by that manufacturer.
// Example body: { "manufacturer": "Pfizer" }

app.get("/drugs/manufacturer-count", (request, response)=> {

    const userInput = request.body // get user input
    if (!userInput){
        response.json({
            success: false,
            message: "no input"
            
        })
        return
    } 

    const company = userInput.manufacturer
    if (!userInput){
        response.json({
            success: false,
            message: "no manufacturer or invalid manufacturer"
            
        })
        return
    } 

    const searchByManufacturer =  drugs.filter((drug) => drug.manufacturer === company)

    const count = searchByManufacturer.length

    response.json({
        success:true,
        count
})
    
})


// GET /drugs/count-analgesics
// Count and return how many drugs have the category "Analgesic".

app.get("/drugs/count-analgesics", (request, response)=>{
    let numberOfDrug = 0

    drugs.forEach(each => {
        
        if (each.category == "Analgesic") {
            numberOfDrug ++

        
    }})

    response.json({
        success: true,
        message: `The Analgesics are ${numberOfDrug}`
    })
})










