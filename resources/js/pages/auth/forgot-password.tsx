import GuestLayout from '@/layouts/guest-layout';
import InputError from '@/components/InputError';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <Head title='Forgot Password' />

            <div className='mb-4 text-sm text-muted-foreground'>
                Forgot your password? No problem. Just let us know your email address and we will email you a password
                reset link that will allow you to choose a new one.
            </div>

            {status && <div className='mb-4 text-sm font-medium text-green-600'>{status}</div>}

            <form onSubmit={submit}>
                <Input
                    id='email'
                    type='email'
                    name='email'
                    value={data.email}
                    className='mt-1 block w-full'
                    onChange={(e) => setData('email', e.target.value)}
                />

                <InputError message={errors.email} className='mt-2' />

                <div className='mt-4 flex items-center justify-end'>
                    <Button className='ml-4' disabled={processing}>
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
        </>
    );
}

ForgotPassword.layout = (page: any) => <GuestLayout title={'Forgot Password'} children={page} />;
