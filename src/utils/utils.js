function parseDate(date) {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    const dateObj = new Date(date);

    return `${days[dateObj.getDay()]}, ${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
}

function createMockJoi() {
    const mockSchema = {validate: () => ({})}

    return new Proxy({}, {
        get() {
            return () => mockSchema;
        }
    });
}

async function createJoi() {
    if (!import.meta.env.DEV) return createMockJoi();

    return (await import("joi")).default;
}

const J = await createJoi();

function validateProps(schema, props, componentName) {
    const validationResult = schema.validate(props, {
        abortEarly: false
    });

    if (validationResult.error) {
        const {details} = validationResult.error;
        details.forEach((error) => {
            console.warn(`[${componentName}] Validation error: ${error.message}`);
        })
    }

    return validationResult.value
}

export {
    parseDate,
    validateProps,
    J,
}