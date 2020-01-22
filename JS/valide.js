
            function ValidateEmail()
 {
            var inputxt;
            
                  inputxt=document.getElementById("inputxt").value;
              
                var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z]{2,6}\.[a-z]{2,4}$/;
                var cpt=0;
                 if(inputxt=="")
                    {
                       window.alert(" is null") ;
                        cpt++;
                    }
                   
                 else if(!regex.test(inputxt))
                {
                    
                        
                        window.alert(" not valide ");
                    cpt++;
                       
                }
             
               if(cpt==0)
               {
                window.alert("valide");
               }
               
                
            }
    