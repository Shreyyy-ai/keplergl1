import JSZip from "jszip";

export default async function fetchData(){
    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoxNzN9."
    );

    const myInit = {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
      cache: "default"
    };
    
    var result = [];

    const response = await window.fetch("https://tpt-staging1.fareye.co/streams/data_analysis/export_stoppages",myInit);

    if (response.status === 200 || response.status === 0) {
        const blobObject = await response.blob();
        const zip = await JSZip.loadAsync(blobObject);

        for(let filename of Object.keys(zip.files)){
            const fileData = await zip.files[filename].async("string");
            var lines = fileData.split("\n");
            for (var i = 1; i < lines.length; i++) {
                var currentline = lines[i].split(",");
                if(currentline.length === 17){
                    var temp = currentline.map((element) => {
                        if(/^\d+(\.\d+)?$/.test(element)){
                            return parseFloat(element);
                        } 
                        else return element;
                    })
                    // console.log(temp);
                    result.push(temp); 
                }
            }
        };
        
    } else {
        console.log(response.Error);
        //return Promise.reject(new Error(response.statusText));
        
    }
    return result;
}


