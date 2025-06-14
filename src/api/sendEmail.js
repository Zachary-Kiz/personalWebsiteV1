const sendEmail = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/send_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add auth token if needed:
          // 'Authorization': `Bearer ${yourToken}`
        },
        body: JSON.stringify(formData)
      });
  
      // Check if the response is OK (status 2xx)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch users');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('❌ API Request Error:', error.message);
      throw error; // rethrow so calling code can handle it too
    }
}

export default sendEmail;