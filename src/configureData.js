export default function configureData(data){
    console.log('configureData',data);
    var result= {
        "fields": [
            {
                "name": "invoiceNo",
                "format": "",
                "type": "string"
            },
            {
                "name": "vehicleNo",
                "format": "",
                "type": "string"
            },
            {
                "name": "origin",
                "format": "",
                "type": "string"
            },
            {
                "name": "destination",
                "format": "",
                "type": "string"
            },
            {
                "name": "eta",
                "format": "",
                "type": "string"
            },
            {
                "name": "state",
                "format": "",
                "type": "string"
            },
            {
                "name": "status",
                "format": "",
                "type": "string"
            },
            {
                "name": "consigner_lat",
                "format": "",
                "type": "real"
            },
            {
                "name": "consigner_long",
                "format": "",
                "type": "real"
            },
            {
              "name": "consignee_lat",
              "format": "",
              "type": "real"
          },
          {
              "name": "consignee_long",
              "format": "",
              "type": "real"
          }
        ],
    "rows" :[]
    }

    const dataRows = data.map((element)=>{
        var temp =[];
        temp.push(element.invoiceNo);
        temp.push(element.vehicleNo);
        temp.push(element.origin);
        temp.push(element.destination);
        temp.push(element.eta);
        temp.push(element.state);
        temp.push(element.status);
        temp.push(element.coords.origin.lat);
        temp.push(element.coords.origin.lng);
        temp.push(element.coords.destination.lat);
        temp.push(element.coords.destination.lng);
        
        return temp;
    });
    result.rows=dataRows;
    return result;
}