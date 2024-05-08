try {
    // Code to try
    const result = 10 / 2;
    console.log("Result:", result);
} catch (error) {
    // Code to handle the error
    console.error("An error occurred:", error.message);
} finally {
    // Code to execute regardless of whether an error occurred or not
    console.log("Cleanup code here");
}


try {
    const result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("Division by zero");
    }
    console.log("Result:", result); // This line will not be executed if division by zero occurs
} catch (error) {
    console.error("An error occurred:", error.message);
}
