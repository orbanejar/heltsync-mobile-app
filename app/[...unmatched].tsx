import { Redirect } from 'expo-router';

export default function Unmatched() {
    console.log('Redirecting you to the home screen');
    return Redirect({href: "/home"});
}
