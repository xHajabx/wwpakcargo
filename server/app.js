var fs = require("fs"); 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser'); 
const axios = require("axios")

require('dotenv').config() // load the enviornment file 

// const Agent = require("./models/agent")
// const agents = [];

// const Customer = require("./models/customer") 
// const customers = []; 

// const invoice = require('./models/invoice')
// const invoices = []; 

const mongoose = require("mongoose")
mongoose.set("strictQuery", false)
const mongoDB = "mongodb+srv://syedahijab:Pakistan123!@wwpakcargodev.oapwr8z.mongodb.net/wwpakcargo?retryWrites=true&w=majority"


// main().catch((err) => console.log(err));


// { 
//   "container": "31", 
//   "invoice": "4409", 
//   "sender": {
//       "name": "Hajab Syeda", 
//       "address": "1430 Bellmore Rd, North Bellmore NY 11710", 
//       "contact": "347-972-4409"
//   },
//   "receiver": {
//       "name": "Muhammad Ali", 
//       "address": "Kuleywal Syedan, District Gujrat",
//       "contact": "+92 342 23466", 
//       "contact_2": "+92 325 78945"
//   }, 
//   "parcel": {
//       "weight": "50lbs", 
//       "total_parcel": "1", 
//       "charges": "$110", 
//       "tracking": "4409/1", 
//       "insurance": "$110"
//   }, 
//   "signature": "Hajab Syeda", 
//   "date_signed": "3/18/24"
// }

function generateInvoice(formData) {
  //  Step 1: write to a json file  
  const formDataObject = {
    container: `31`, 
    invoice: `${formData.invoice}`,
    sender: {
        name: `${formData.sender_first_name} + ${formData.sender_last_name}`, 
        address: `${formData.sender_address}`,
        contact: `${formData.contact}`
    }, 
    receiver: {
      name: `${formData.receiver_first_name} + ${formData.receiver_last_name}`,
      address: `${formData.receiver_address}`, 
      contact: `${formData.contact}`, 
      contact_2: `${formData.contact_2}`, 
    },
    parcel: {
      weight: `${formData.weight}`, 
      total_parcel: `${formData.total_parcel}`,
      charges: `${formData.charges}`, 
      tracking: `${formData.tracking}`,
      insurance: `${formData.insurance}`
    }, 
    signature: `${formData.sender_first_name} + ${formData.sender_last_name}`, 
    date_signed: "3/19/2024"
  }

  fs.writeFile("./invoice_data.json", JSON.stringify(formDataObject), (error) => {
    if(error) {
      console.log("An error has occured", error);
      return;  
    }
    console.log("data written successfully to disk"); 
  })

  // Step 2: add json file + wwpakcargo.docx into one folder
  // const invoice_folder_name = `./wwpakcargodocs/${formData.sender_first_name}${formData.sender_last_name}`;
  // console.log("invoice folder name = " + invoice_folder_name); 

  // try {
  //   if(!fs.existsSync(invoice_folder_name)) {
  //     fs.mkdirSync(invoice_folder_name); 
  //   } 
  // } catch(err) {
  //   console.error(err); 
  // }

  // const invoice_json_file_path = './invoice_data.json'; 
  // const invoice_doc_path = './wwpakcargo_docs/wwpakcargo_invoice.docx';
  // const new_path = `${invoice_folder_name}/invoice_data.json`;
  // const new_path_2 = `${invoice_folder_name}/wwpakcargo_invoice.docx`;

  // console.log("new path = " + new_path); 

  // // Copy the wwpakcargo_invoice to the doc
  // try {
  //   fs.rename(invoice_json_file_path, new_path, () => {
  //     console.log("file renamed "); 
  //   }); 
  //   fs.copyFile(invoice_doc_path, new_path_2,  )

  //   console.log("moved two files successfully"); 
  // } catch (error) {
  //   console.error(error); 
  // }


  
  // Step 3: calll Adobe document generation API 
  // Step 1: getting the access token using client id and client secret
  
  
  const client_id = process.env.CLIENT_ID; 
  const client_secret = process.env.CLIENT_SECRET; 
  
  let config = {
    method: 'post', 
    maxBodyLength: Infinity, 
    url: `https://ims-na1.adobelogin.com/ims/token/v3?grant_type=client_credentials&client_id=${client_id}
      &client_secret=${client_secret}&scope=openid,AdobeID,DCAPI`, 
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded', 
    }
  }; 

  axios.request(config)
  .then((response) => {
    // console.log(JSON.stringify(response));
    // retrieve token 
    const access_token = response.data.access_token; 
    const bearer = response.data.bearer; 

    console.log("access token = " + access_token); 
    console.log("bearer = " + bearer); 

  })
  .catch((error) => {
    console.log(error);
  })
  


  // upload asset 
  let config_asset = {
    method: 'post', 
    maxBodyLength: Infinity, 
    url: `https://pdf-services-ue1.adobe.io/assets?mediaType=application/vnd.openxmlformats-officedocument.wordprocessingml.document`, 
    headers: {
      'Authorization': `Bearer ${access_token}`, 
      'x-api-key': `${client_id}`, 
      'Content-Type': 'application/json'
    }
  }; 

  axios.request(config_asset)
  .then((response) => {
    console.log(response); 
    console.log("asset id = " + response.data.assetID); 
    console.log("uploadUri = " + response.data.uploadUri); 

  })

  .catch((error) => {
    console.log(error); 
  })

  
  





}

async function main() { 
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB); 
  console.log("Debug: Mongoose should be connected");
  await createAgents();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close(); 
}

async function customerCreate(index, sender_first_name, sender_last_name, sender_address, sender_contact, sender_email) {
  const customer = new Customer({first_name: sender_first_name, last_name: sender_last_name, address: sender_address, contact_num: sender_contact, email: sender_email}); 
  await customer.save(); 
  customers[index] = customer;
  console.log(`Added Customer: ${sender_first_name} ${sender_last_name}`); 
}

async function agentCreate(index, first_name, last_name, dropoff_address, contact_num, email, state, area_covered, rate) {
  const agent = new Agent({first_name: first_name, last_name: last_name, dropoff_address: dropoff_address, contact_num: contact_num,
                            email: email, state: state, area_covered: area_covered, rate: rate})
  await agent.save(); 
  agents[index] = agent; 
  console.log(`Added Agent: ${first_name} ${last_name}`);
}

async function invoiceCreate(index, first_name, last_name, address, contact_num, email, receiver_first_name, 
                                receiver_last_name, receiver_address, receiver_contact, receiver_contact_2, parcel_weight, total_parcel, charges, 
                                tracking, insurance) {
  const invoice = new Invoice({sender_first_name: first_name, sender_last_name: last_name, sender_address: address, sender_contact_num: contact_num, sender_email: email, 
                              receiver_first_name: receiver_first_name, receiver_last_name: receiver_last_name, receiver_address: receiver_address, receiver_contact: receiver_contact, 
                              receiver_contact_2: receiver_contact_2, parcel_weight: parcel_weight, total_parcel: total_parcel, charges: charges, tracking: tracking, insurance: insurance})
    await invoice.save();
    invoices[index] = invoice; 
    console.log(`Added Invoice: ${first_name} ${last_name} and ${receiver_first_name} ${receiver_last_name}`)
}

async function createAgents() {
  console.log("Adding Agents");
  await Promise.all([
    agentCreate(0, "Tahir", "Syed", "1430 Bellmore Rd, North Bellmore NY 11710", "(+1) 917-515-6093", "wwpakcargo@gmail.com", "NY", 
                    ["AL",	"AK",	"AZ",	"AR",	"CA",	"CO",	"CT",	"DE",	"FL",	"GA",	"HI",	"ID",	"IL",	"IN",	"IA",	"KS",	"KY",	"LA",	"ME",	"MD",	"MA",	
                    "MI",	"MN",	"MS",	"MO",	"MT",	"NE",	"NV",	"NH",	"NJ",	"NM",	"NY",	"NC",	"ND",	"OH",	"OK",	"OR",	"PA",	"RI",	"SC",	"SD",	"TN",	
                    "TX",	"UT",	"VT",	"VA",	"WA",	"WV",	"WI",	"WY"], "$3.50/kg"),
    agentCreate(1, "Zulfiqar", "", "1061 Coney Island Ave, Brooklyn NY 11230", "+1 929-500-4108", " ", "NY", ["Brooklyn, NY"], "3.50/kg"),
    agentCreate(2, "Hamid", " ", "1061 Coney Island Ave, Brooklyn NY 11230", "+1 631-568-2139", " ", "NY", ["Brooklyn, NY"], "3.50/kg"),
    agentCreate(3, "Ahmed", "Nawaz", "", "+1 631-612-0160", "", "NY", ["Long Island, NY"], "3.50/kg"),
    agentCreate(4, "Shakeel", "Ahmed", "", "+1 732-497-2627", "", "NJ", ["Edison, NJ", "CherryHill, NJ", "PA", "DE" ], "4.50/kg"),
    agentCreate(5, "Aftab", "Choudhary", "", "+1 516-508-2852", " ", "NJ", ["Edison, NJ"], "4.50/kg"),
    agentCreate(6, "Farooq", "Ahmed", "", "+1 443-531-6698", " ", "MD", ["Baltimore, MD"], "6.50/kg"),
    agentCreate(7, "Waheed", "Choudhary", "", "+1 301-693-7277", " ", "VA", ["VA", "MD"], "6.50/kg"),
    agentCreate(8, "Asia", "Abbas", "", "+1 571-213-4500", " ", "VA", ["VA"], "6.50/kg"),
    agentCreate(9, "Hussein", "Qureshi", "", "+1 203-909-9780", " ", "CT", ["CT"], "6.50/kg"),
  ]);
}

async function createCustomer(formData) {
  console.log("adding customer...");
  await Promise.all([
    customerCreate(0, formData.sender_first_name, formData.sender_last_name, formData.sender_address, formData.sender_contact, "no email")
  ])
}

async function createInvoice(formData) {
  console.log("adding invoice...."); 
  await Promise.all([
    invoiceCreate(0, formData.sender_first_name, formData.sender_last_name, formData.sender_address, formData.sender_contact_num, formData.sender_email, 
      formData.receiver_first_name, formData.receiver_last_name, formData.receiver_address, formData.receiver_contact, formData.receiver_contact_2, 
      formData.parcel_weight, formData.total_parcel, formData.charges, formData.tracking, formData.insurance )
  ])
}

async function findRateandAgent(state) {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB); 
  console.log("Debug: Mongoose should be connceted");
  console.log("looking for agent with state = " + state); 
  const agents = await Agent.find(
    { state: state },
    "first_name last_name contact_num rate state"
  ).exec(); 
  console.log("Debug: Closing mongoose");
  mongoose.connection.close(); 
  console.log("agents in function" + agents); 
  return agents; 
}

var indexRouter = require('./routes/index');
var stateRouter = require('./routes/state');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

app.use('/', indexRouter);
app.use(bodyParser.json()); 

app.post('/state', async(req, res) => {
  console.log("post request to /state"); 
  const {state} = req.body; 
  // const state = req.body; 
  console.log(state); 

  try {
    let agent_results = findRateandAgent(state);
    agent_results.then(function(results) {
      console.log("result type = " + typeof(results))
      res.json(results)
    })
  }
  catch(e) {
    res.json("fail")
    console.log(e)
  }

})

app.post('/invoice', async(req, res) => {
  console.log("post request made to /invoice");
  const {formData} = req.body;
  console.log("formData = " + JSON.stringify(formData))
  console.log("formData.sender_first_name = " + formData.sender_first_name)
  
  
  // console.log(`Client ID :: ${process.env.CLIENT_ID}`);
  // console.log(`Client secret :: ${process.env.CLIENT_SECRET}`); 

  // add formData to customer Database and then add to invoice 
  // console.log("adding customer to DB... ");
  // console.log("Debug: About to connect");
  // await mongoose.connect(mongoDB); 
  // console.log("Debug: Mongoose should be connected");
  // await createCustomer(formData);
  // console.log("Debug: Closing mongoose");
  // mongoose.connection.close(); 

  // add customer invoice 
  // console.log("adding customer invoice... "); 
  // console.log("Debug: About to connect");
  // await mongoose.connect(mongoDB); 
  // console.log("Debug: Mongoose should be connected");
  // await createInvoice(formData); 
  // console.log("Debug: Closing mongoose");
  // mongoose.connection.close();   
  
  // generate json based on formData 
  console.log("generating json invoice....")
  // generateInvoice(formData)


})



app.use(express.static("build"))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



// const main_agent = new Agent({
//   first_name: "Tahir",
//   last_name: "Syed",
//   address: ["1430 Bellmore Rd, North Bellmore NY 11710", "Coney Island, Brooklyn, NY"],
//   email: "wwpakcargo@gmail.com",
//   contact_num: "(+1) 917-515-6093",
//   state: "NY",
//   rate: "3.50/kg"
// })

// await main_agent.save();

// console.log(main_agent.name);
// console.log(main.agent.state);
// console.log(main.agent.rate);









module.exports = app;


