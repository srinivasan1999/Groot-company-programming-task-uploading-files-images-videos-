 //get Element
        //var gettingelement = document.getElementById("file");
        //oneventlistner
        document.querySelector(".myfile").addEventListener("change", (e)=>{
        
            console.log(e);
            //get file
            var file = e.target.files[0];
          
            //create storage reference
            //firebase.storage().ref('folder_name/file_name');
            var storageRef = firebase.storage().ref('swet/' + file.name);
            //Upload file
            storageRef.put(file); 

            if(e.isTrusted==true){
                document.getElementById("Aknoledgement").innerHTML = "Successful"
            }
            else{
                document.getElementById("Aknoledgement").innerHTML = "Not Successful"
            }

          }
        
        );