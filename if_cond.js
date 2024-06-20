function colorMode(mode) {
    let color;
    if (mode === "dark-mode") {
        color = "Black"
    }
    else if (mode === "light-mode") {
        color = "White"
    }
    else {
        color = "Default"
    }
    console.log("Color is ", color)
    console.log("mode is", mode)
}

colorMode("dark-mode")
