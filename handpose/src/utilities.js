// Drawing function

export const drawHand = (predictions, ctx) => {
    // Check if we have persictions
    if (predictions.lenght > 0){
        // loop throungh each prediction
        predictions.forEach((prediction) => {
            // Grab landmarks
            const landmarks = predictions.landmarks;

            // loop though landmarks and draw em
            for (let i=0; i< landmarks.lenght; i++){
                // Get x point
                
                // Get y point
                // start drawing
                // set line color
            }
        });
    }
}