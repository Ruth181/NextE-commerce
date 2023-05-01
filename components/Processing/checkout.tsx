import { CheckoutUserInterface } from "@/utils/types";
import Link from "next/link";
import { FC, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

let totalPrice: number = 0.0;

export const Checkout: FC = () => {

    const [state, setState] = useState<CheckoutUserInterface>({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state1: '',
        phoneNumber: ''
    });

    const selector = useSelector((state: any) => state.store.data);

    const onChangeEmailHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value: email } = target;
        setState({ ...state, email });
    }

    const onChangeFirstNameHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value: firstName } = target;
        setState({ ...state, firstName });
    }

    const onChangeLastNameHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value: lastName } = target;
        setState({ ...state, lastName });
    }

    const onChangeAddressHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value: address } = target;
        setState({ ...state, address });
    }

    const onChangeCityHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value: city } = target;
        setState({ ...state, city });
    }

    const onChangeStateHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value: state1 } = target;
        setState({ ...state, state1 });
    }

    const onChangePhoneNumberHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value: phoneNumber } = target;
        setState({ ...state, phoneNumber });
    }


    return (
        <div className="container-fluid">
            <div className="d-flex flex-md-row flex-column-reverse">
                {/* <!-- checkout form --> */}
                <div className="col-12 col-md-6 bg-white p-3 p-md-5">
                    <p className="display-5 text-center">
                        S&nbsp;i&nbsp;l&nbsp;o&nbsp;u&nbsp;e&nbsp;t&nbsp;t&nbsp;e
                    </p>

                    <div className="w-100 d-block d-md-none border-top border-bottom p-3 my-2"
                        style={{ background: '#eee' }}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="lead fw-normal"
                                style={{ fontSize: '20px' }}>
                                <span>Total</span>
                            </div>

                            <div className="display-6 fw-normal">
                                <span>#{totalPrice}</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-capitalize text-center" style={{ fontSize: '15px', color: '#707070' }}>
                        <span>cart <ChevronRight style={{ fontSize: '11px' }} /></span>
                        <span>information <ChevronRight style={{ fontSize: '11px' }} /></span>
                        <span>billing <ChevronRight style={{ fontSize: '11px' }} /></span>
                        <span>payment <ChevronRight style={{ fontSize: '11px' }} /></span>
                    </div>
                    <div className="d-block d-lg-flex justify-content-md-between fw-normal text-black my-3">
                        <p style={{ fontSize: '17px' }}>Contact Information</p>
                        <p style={{ fontSize: '15px' }}>Already Have an account?&nbsp;
                            <Link href="/login" className="text-decoration-none text-reset">Login</Link>
                        </p>
                    </div>
                    {/* <!-- form begins here --> */}
                    <div className="w-100">
                        <div className="mb-3">
                            <input type="email"
                                className="form-control rounded-2 border shadow-none"
                                style={{ padding: '0.8rem' }}
                                id="formGroupExampleInput2"
                                placeholder="Email"
                                onChange={onChangeEmailHandler} />
                        </div>
                        {/* <!-- shipping address --> */}
                        <form action="">
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text"
                                        className="form-control rounded-2 border shadow-none"
                                        style={{ padding: '0.8rem' }}
                                        placeholder="First name"
                                        aria-label="First name"
                                        onChange={onChangeFirstNameHandler} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text"
                                        className="form-control rounded-2 border shadow-none"
                                        style={{ padding: '0.8rem' }}
                                        placeholder="Last name"
                                        aria-label="Last name"
                                        onChange={onChangeLastNameHandler} />
                                </div>
                            </div>
                            <div className="col-12">
                                <input type="text"
                                    className="form-control rounded-2 border my-3 shadow-none"
                                    style={{ padding: '0.8rem' }}
                                    id="inputAddress"
                                    placeholder="Address"
                                    onChange={onChangeAddressHandler} />
                            </div>

                            {/* <!-- city code state --> */}
                            <div className="row gx-3 gy-2 align-items-center mb-3">
                                <div className="col-12 col-sm-6">
                                    <input
                                        type="text"
                                        className="form-control rounded-2 border shadow-none"
                                        style={{ padding: '0.8rem' }}
                                        id="specificSizeInputName"
                                        placeholder="City"
                                        onChange={onChangeCityHandler} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input
                                        type="text"
                                        className="form-control rounded-2 border shadow-none"
                                        style={{ padding: '0.8rem' }}
                                        id="specificSizeInputName"
                                        placeholder="state"
                                        onChange={onChangeStateHandler} />
                                </div>
                            </div>

                            <div className="w-100">
                                <input type="text"
                                    className="form-control rounded-2 border mb-3 shadow-none"
                                    style={{ padding: '0.8rem' }}
                                    id="phone"
                                    placeholder="Phone"
                                    onChange={onChangePhoneNumberHandler} />
                            </div>
                        </form>
                        {/* <!-- return to cart or submit checkout form --> */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <Link href="/cart" className="text-decoration-none">
                                <div className="fw-normal text-black">
                                    <span><ChevronLeft />Return to cart</span>
                                </div>
                            </Link>
                            <button className="btn-primary p-3 rounded">
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!-- details for total --> */}
                <div
                    className="d-none d-md-inline col-md-6 p-3 p-md-5 border-left"
                    style={{ backgroundColor: '#eee' }}
                >
                    {/* <!-- list of products --> */}
                    {selector && selector.map((data: any, i: number) =>
                    {
                        totalPrice += (data.unitPrice * data.quantity);

                        return(
                            <div key={i}
                            className="d-flex justify-content-between align-items-center mb-4">
                            <div className="w-75 d-flex flex-row gap-4 align-items-center">
                                <div
                                    id="img-item"
                                    className="position-relative py-1 py-lg-2 rounded-2 bg-white border">
                                    <object
                                        data={data.url}
                                        className="w-100 h-100"
                                    />
                                    <div
                                        className="img-badge rounded-circle"
                                        style={{ backgroundColor: '#333', color: '#fff' }}>
                                        {data.quantity}
                                    </div>
                                </div>
                                <div className="lead fw-normal"
                                    style={{ fontSize: '16px' }}>
                                    <span>{data.name}</span>
                                </div>
                            </div>
                            <div className="lead fw-normal"
                                style={{ fontSize: '16px' }}>
                                <span>#{data.unitPrice * data.quantity}</span>
                            </div>
                        </div>
                        );
                    }
                    )}
                    <div className="border-top">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="lead"
                                style={{ fontSize: '17px' }}>
                                <span>Total</span>
                            </div>

                            <div className="display-6">
                                <span>#{totalPrice}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}