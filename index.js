var result = document.getElementById("result")
function display (number){
    // 
    result.value+=number;


}

function calulate(){
    var final_number = result.value;
    // alert(final_number);
    var final_result =eval(final_number);
    result.value = final_result;


}
function clrs(){
    result.value="";

}
function dle(){
    result.value = result.value.slice(0,-1);
}