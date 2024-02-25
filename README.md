# fhir-proxy
FHIR proxy server to be used with Azure API for FHIR

# fhir_proxy
 FHIR Proxy server in Node for Azure

Install:
1.  Clone the repo:  
2.  npm install
3.  Complete the .env file with FHIR server credentials on Azure.
4.  Start the server:  node ./index.js

Server will start listening on port 5000

Requirements:
- Azure API for FHIR server running on Azure (or local).
- Credentials for above:  client secret, client id, tenant id

## Environment file (.env)
An .env file must be included in order to connect to the FHIR server.  

>CLIENT_ID=*client-id*  
CLIENT_SECRET=*client-secret*

>AUTHORITY=https://login.microsoftonline.com/*tenant-id*/oauth2/token
RESOURCE=https://*name*.azurehealthcareapis.com
BASE_URL=https://*name*.azurehealthcareapis.com

>TENANT_ID=*tenant-id*
  
**Client.js** has the low-level CRUD functions to communicate to with a FHIR server, which can be used as the basis for a client.

**Patient.js** uses client.js to provide a higher level interface for patient data.  This could be used as a template for other FHIR compartments like Practitioner, Observations, Encounters, etc.
