var dev = 'dev';
var hml = 'hml';
var prd = 'prd';

var local = prd;

let apiUrl: string = '';

if (local === dev) {
    apiUrl = 'http://localhost:8080/api';
} else if(local === hml){
    apiUrl = 'https://api.arthousepapeldeparede.com.br/api';
}else if(local === prd){
    apiUrl = 'https://api.arthousepapeldeparede.com.br/api';

}
export const environment = {
    production: false,
    apiUrl: apiUrl
};
