"use client";

import { handleCart } from "@/actions/server/cart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";

const CartButton = ({ product }) => {
  const session = useSession();
  const path = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const isLogin = session?.status == "authenticated";

  const handleAdd2Cart = async () => {
    setIsLoading(true);
    if (isLogin) {
      const result = await handleCart({ product, inc: true });
      if (result.susses) {
        Swal.fire("Added to Cart", product?.title, "success");
      } else {
        Swal.fire("Opps!", "Something wrong happened", "error");
      }
      setIsLoading(false);
    } else {
      router.push(`/login?callbackUrl=${path}`);
      setIsLoading(false);
    }
  };
  return (
    <button
      disabled={session.status == "loading" || isLoading}
      onClick={handleAdd2Cart}
      className="btn btn-primary w-full md:w-auto btn-sm"
    >
      <FaShoppingCart className="mr-2" />
      Add to Cart
    </button>
  );
};

export default CartButton;
