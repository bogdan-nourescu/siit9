//Promise example 1:
/**
 * Waits for ms milliseconds then resolves
 * @param {Number} ms
 * @returns {Promise<unknown>}
 */
async function wait(ms){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        },ms)
    });
}


/**
 * shows toast/snackbar element and hides it after 5 seconds
 * HTML and CSS from: https://www.w3schools.com/howto/howto_js_snackbar.asp
 * @returns {Promise<void>}
 */
async function showToast(message){
    let toast = document.querySelector("#toast");
    toast.innerHTML = message;
    toast.classList.remove("hidden");

    await wait(5000);
    toast.classList.add("hidden");
}

function showToast(message){
    let toast = document.querySelector("#toast");
    toast.innerHTML = message;
    toast.classList.remove("hidden");

    setTimeout(()=>{
        toast.classList.add("hidden");
    },5000)
}
