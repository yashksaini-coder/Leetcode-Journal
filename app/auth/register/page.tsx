import { Suspense } from "react";
import SignupForm from "@/components/AuthComponent/SignupForm";
import SearchParamsWrapper from "@/components/AuthComponent/SearchParamsWrapper";


export default function SignupPage() {
    return (
        <div className="">
            <Suspense fallback={<div>Loading...</div>}>
                <SearchParamsWrapper>
                    <SignupForm />
                </SearchParamsWrapper>
            </Suspense>
        </div>
    );
}