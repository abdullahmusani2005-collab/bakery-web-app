/**
 * Name: Abdullah Musani
 * Date: April 20, 2026
 * Description: UserRequest API
 */

const url = "api/users/register.php";
const updateURL = "api/users/updateUser.php";
const logoutURL = "api/users/logout.php";

export async function getUsers() {
  try {
    const response = await fetch(updateURL);
    if (!response.ok) throw new Error("Failed to retrieve staff list.");
    return await response.json();
  } catch (err) {
    throw new Error("Network error: Could not reach user server.");
  }
}

export async function registerUser(formData) {
  try {
    const response = await fetch(url, { method: "POST", body: formData });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.error) throw new Error(data.error || "Could not register new user.");
    return data;
  } catch (err) {
    throw new Error(err.message || "Error connecting to registration service.");
  }
}

export async function updateUser(formData) {
  try {
    const response = await fetch(updateURL, { method: "POST", body: formData });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.error) throw new Error(data.error || "Update failed: Server rejected the changes.");
    return data;
  } catch (err) {
    throw new Error(err.message || "Connection lost: User update failed.");
  }
}

export async function deleteUser(id) {
  try {
    const response = await fetch(url + `?userid=${encodeURIComponent(id)}`);
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.error) throw new Error(data.error || "Could not delete user.");
    return data;
  } catch (err) {
    throw new Error(err.message || "Connection lost: User update failed.");
  }
}

export async function logoutUser() {
  try {
    const response = await fetch(logoutURL);
    if (!response.ok) throw new Error("Logout failed.");
    return await response.json();
  } catch (err) {
    throw new Error("Connection lost: Logout failed.");
  }
}
