import { User } from "../interfaces/user.interface";

const create = async (user: User): Promise<User> => {
    const result = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(response => response.json())
    .catch(error => { console.log("theres something wrong", error) });

    return result;
}

const getAll = async (): Promise<User[]> => {
    const result = await fetch('http://localhost:3000/users',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .catch(error => { console.log("error on getAll", error) });

    return result;
}

const update = async (user: User): Promise<User> => {
    const result = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(response => response.json())
    .catch(error => { console.log("theres something wrong", error) });

    return result;
}

const remove = async (user: User): Promise<void> => {
   await fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response)
    .catch(error => { console.log("theres something wrong", error) });
}

export const UserService = {
    create,
    getAll,
    update,
    remove
};

