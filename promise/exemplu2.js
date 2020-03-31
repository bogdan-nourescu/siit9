//Promise example 2:
/**
 * Waits for a click on elem or the time to pass
 *
 * @param {Element} elem
 * @param {Number} ms
 * @returns {Promise<String>}
 */
async function waitOrClick(elem,ms){
    return new Promise((resolve, reject) => {
        const clickHandler = ()=>{
            resolve("from click");
        };

        setTimeout(()=>{
            elem.removeEventListener('click', clickHandler);
            resolve("from timeout");
        },ms);
        elem.addEventListener('click', clickHandler, {once : true});
    });


}


/**
 * shows toast/snackbar element and hides it after 5 seconds
 * @returns {Promise<void>}
 */
async function showToast(message){
    let toast = document.querySelector("#toast");
    toast.innerHTML = message;
    toast.classList.remove("hidden");

    let resolvedFrom = await waitOrClick(toast, 5000);

    console.log(resolvedFrom);
    toast.classList.add("hidden");
}