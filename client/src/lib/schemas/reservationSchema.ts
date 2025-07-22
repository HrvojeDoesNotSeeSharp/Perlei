import { z } from 'zod';
const requiredString = (fieldName: string) => z.string({error: `Unesite ${fieldName}`}).min(1, {message: `Unesite ${fieldName}`})

export const reservationSchema = z.object({
    ime: requiredString('ime'),
    mobitel: requiredString('mobitel'),
    email: requiredString('email'),
    //date: z.custom<Dayjs>(val=> val instanceof dayjs, 'unesite datum'),
    date: z.date('unesite datum'),
    //services: requiredString('services'),
    poruka: z.string().optional()
})

export type reservationSchema = z.infer<typeof reservationSchema>