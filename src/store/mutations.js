const changeCity = (state, city)=>{
    state.city = city;
    try {
        if (localStorage.city) {
            localStorage.city = city;
        }
    } catch (e) { console.log(e);}
}

export default {
    changeCity
}
