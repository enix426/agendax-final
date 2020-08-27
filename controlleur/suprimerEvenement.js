   // fonction suprimer evenement 
   export function suprimerEvenement(id) {
       let ajax = new XMLHttpRequest();
       let method = "DELETE";
       let url = "model/suprimerEvenement.php";
       let asynchronous = true;

       ajax.open(method, url, asynchronous);

       // Dire a XMLHttpRequest que j'envoie du JSON: "{...}"
       ajax.setRequestHeader("Content-Type", "application/json")

       let data = {
           id: id

       }
       ajax.send(JSON.stringify(data));

       ajax.onreadystatechange = function() {

           if (this.readyState == 4 && this.status == 200) {

           }
       }
       window.location.reload()
   }