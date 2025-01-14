exports.handler = async (event, context) => {
    try {
        const body = JSON.parse(event.body);
        console.log(`User clicked on: ${body.element}, Time: ${body.timestamp}`);
        // Du kannst die Daten hier speichern (z. B. in einer Datenbank)
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Click tracked successfully' }),
        };
    } catch (error) {
        console.error('Error tracking click:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error tracking click' }),
        };
    }
};
