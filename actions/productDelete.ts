'use server';

export async function productDelete(id: number) {
  try {
    const response = await fetch(`http://localhost:3000/api/clothes/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete product, status ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Error:', error);
    return { success: false, error: 'Failed to delete product' };
  }
}