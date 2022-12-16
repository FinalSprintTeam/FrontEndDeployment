import { API_ENDPOINT } from '../../connection/server';

const deleteMember = async (memberId) => {
  const res = await fetch(API_ENDPOINT + `/api/member/${memberId}/delete`, {
    method: 'DELETE',
  });
};

export { deleteMember };
