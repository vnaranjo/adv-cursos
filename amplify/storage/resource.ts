import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'arbovida',
  isDefault: true,
   access: (allow) => ({
    'arbovida.org/cursos/*': [
        allow.groups(['admin', 'teacher']).to(['read', 'write', 'delete']),
        allow.authenticated.to(['read']),
    ],
    'arbovida.org/website/*': [
        allow.groups(['admin', 'website']).to(['read', 'write', 'delete']),
        allow.authenticated.to(['read']),
    ]
   })
});