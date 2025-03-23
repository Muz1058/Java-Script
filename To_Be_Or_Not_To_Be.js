function expect(value){
    return{
        toBe: function (expected){
            if(value===expected){
                return true;
            }
            else{
                throw new Error("Not Equal");
                
            }
        },

        notToBe: function (expected){
            if (value!==expected) {
                return true;
            }
            else
            {
                throw new Error("Equal");
                }

        }
    };
}

try{
    console.log(expect(5).toBe(5));
    console.log(expect(5).notToBe(5));
}
catch(error){
    console.error(error.message)
}