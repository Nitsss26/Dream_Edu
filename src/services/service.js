
export const getContactById = async (contactId) => {
    const contact = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contactus/${contactId}`);
    if (!contact.ok) {
        throw new Error('Failed to fetch');
    }
    return contact.json();
};


export const getTeamById = async (teamId) => {
    const team = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team/${teamId}`);
    if (!team.ok) {
        throw new Error('Failed to fetch');
    }
    return team.json();
};
