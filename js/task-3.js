function get Element Width(content, padding, border) { 
    const contentWidth = parseInt(content); 
    const paddingWidth = parseInt(padding); 
    const borderWidth = parseInt(border); 
    return contentWidth + paddingWidth + borderWidth; 

};
 console.log(getElementWidth("50px", "8px", "4px")); 
 console.log(getElementWidth("60px", "12px", "8.5px")); 
 console.log(getElementWidth("200px", "0px", "0px"));