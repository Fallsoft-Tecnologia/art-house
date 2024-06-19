var dev = 'dev';
var hml = 'hml';
var prd = 'prd';

var local = hml;

let apiUrl: string = '';

if (local === dev) {
    apiUrl = 'http://localhost:8080/api';
} else if(local === hml){
    apiUrl = 'https://api.fallsoft.com.br/api';
}else if(local === prd){
    apiUrl = 'http://localhost:8080/api';

}
export const environment = {
    production: false,
    apiUrl: apiUrl
};
