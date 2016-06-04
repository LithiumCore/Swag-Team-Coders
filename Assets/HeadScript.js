#pragma strict
var body : GameObject;
var fixLocation : Vector3;

function Start () {

}

function Update () {
    transform.position = Vector3(body.transform.position.x, body.transform.position.y + .7901, body.transform.position.z);       
}