import axios from 'axios';
import { UserlType } from '../../types/userl';

type Props = {
    user: UserlType;
};

function UserList({ user }: Props) {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/delete/' + user.id);
            const token = localStorage.getItem('token');

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            alert('user succefully deleted ');
        } catch (err) {
            alert('error in the user delet');
        }
    };
    return (
        <form method='POST' className='flex flex-col items-center' onSubmit={handleSubmit}>
            <div className='card-body flex justify-between'>
                <div>
                    user Name: <div>{user.name}</div>
                </div>

                <div>
                    user Email: <div>{user.email}</div>
                </div>

                <button type='submit'>DELETE</button>
            </div>
        </form>
    );
}
export default UserList;
