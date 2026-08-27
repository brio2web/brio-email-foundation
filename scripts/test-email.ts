import 'dotenv/config';

import { sendEmail } from '../src/index.js';

const result = await sendEmail({
  to: 'brio2web@gmail.com',
  subject: 'Brio Email Foundation Test',
  template: 'welcome',
  data: {
    name: 'Brandon',
    
  },
});

console.log(result);

if (!result.success) {
  process.exit(1);
}
