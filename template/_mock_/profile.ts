import { axiosMockAdapterInstance } from '../Utilities/axios';
axiosMockAdapterInstance
   .onGet('https://randomuser.me/api/')
   .reply(() => {
     const profile = {
     id: '5e8891ab188cd28',
     email: 'jane@test.com',
     name: 'Jane'
};
return [200, { profile }]});