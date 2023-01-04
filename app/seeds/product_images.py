from app.models import db, ProductImage, environment, SCHEMA

def seed_product_images():
    p1_image1 = ProductImage(
        product_id=1,
        url="https://n.nordstrommedia.com/id/sr3/2c22ab48-7b92-4981-8c40-20c146ba354d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )

    p1_image2 = ProductImage(
        product_id=1,
        url="https://n.nordstrommedia.com/id/sr3/db8916a8-cf57-4c6c-bdf5-28afd7bdfe19.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p1_image3 = ProductImage(
        product_id=1,
        url="https://n.nordstrommedia.com/id/sr3/829b4966-3400-4308-8ef3-d1529e77ac5b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p1_image4 = ProductImage(
        product_id=1,
        url="https://n.nordstrommedia.com/id/sr3/feaae46b-df2b-41a6-8969-7f4e880cc440.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p2_image1 = ProductImage(
        product_id=2,
        url="https://n.nordstrommedia.com/id/sr3/e5ac47df-8b6f-4527-87cb-224a5c6c8618.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )

    p2_image2 = ProductImage(
        product_id=2,
        url="https://n.nordstrommedia.com/id/sr3/088d1695-dca7-47e8-b3ea-8f4a6a6ef842.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p2_image3= ProductImage(
        product_id=2,
        url="https://n.nordstrommedia.com/id/sr3/12d0b01d-01b7-4473-8609-94992ac913ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p2_image4 = ProductImage(
        product_id=2,
        url="https://n.nordstrommedia.com/id/sr3/387cbf9d-fda1-40ee-8794-d500daf9c241.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p3_image1 = ProductImage(
        product_id=3,
        url="https://n.nordstrommedia.com/id/sr3/5a4d01fd-72bd-441c-b957-7cc597f610e3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )

    p3_image2 = ProductImage(
        product_id=3,
        url="https://n.nordstrommedia.com/id/sr3/cd661a16-3e0e-4c9c-a739-b9f887ab7762.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p3_image3 = ProductImage(
        product_id=3,
        url="https://n.nordstrommedia.com/id/sr3/11ea29fb-09f8-463e-bc37-ffb1e3afe70b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p3_image4 = ProductImage(
        product_id=3,
        url="https://n.nordstrommedia.com/id/sr3/61999383-da54-424c-a78b-fc8d3c8b2e1e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p4_image1 = ProductImage(
        product_id=4,
        url="https://n.nordstrommedia.com/id/sr3/d4342e92-ec3b-4290-8921-d3f60e573c3f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )

    p4_image2 = ProductImage(
        product_id=4,
        url="https://n.nordstrommedia.com/id/sr3/e16948b9-ce6c-40eb-8400-f50fe8f25342.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p4_image3 = ProductImage(
        product_id=4,
        url="https://n.nordstrommedia.com/id/sr3/0bdbb910-0849-4d34-b207-6d6b8607a99b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p4_image4 = ProductImage(
        product_id=4,
        url="https://n.nordstrommedia.com/id/sr3/343f90e0-3301-42ff-95ba-d4a44cdd6d39.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p5_image1 = ProductImage(
        product_id=5,
        url="https://n.nordstrommedia.com/id/sr3/72e7ef84-5aa2-43df-854f-173fced55125.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )

    p5_image2 = ProductImage(
        product_id=5,
        url="https://n.nordstrommedia.com/id/sr3/d90d4a4c-a7ec-4f93-a0e0-fc7bf7468003.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p5_image3 = ProductImage(
        product_id=5,
        url="https://n.nordstrommedia.com/id/sr3/cfc0c4db-9246-4b5c-930c-007ef3aab5c2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p5_image4 = ProductImage(
        product_id=5,
        url="https://n.nordstrommedia.com/id/sr3/5e64d446-0b68-4db6-a45a-01b1faec730b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p6_image1 = ProductImage(
        product_id=6,
        url="https://n.nordstrommedia.com/id/sr3/6b2e1ecd-846e-4587-810a-2247f8ac209a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )

    p6_image2 = ProductImage(
        product_id=6,
        url="https://n.nordstrommedia.com/id/sr3/bd52f314-e3aa-46ae-beb1-46e71934d5f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p6_image3 = ProductImage(
        product_id=6,
        url="https://n.nordstrommedia.com/id/sr3/d5f1ebb2-460f-4f64-88d4-5fa3b584fa32.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p6_image4 = ProductImage(
        product_id=6,
        url="https://n.nordstrommedia.com/id/sr3/7e1e1d70-e9b9-49d6-b8cc-8a6d86f91efb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p7_image1 = ProductImage (
        product_id=7,
        url="https://n.nordstrommedia.com/id/sr3/698dbb64-1d8b-40ca-a2cd-4ab61d186009.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )

    p7_image2 = ProductImage (
        product_id=7,
        url="https://n.nordstrommedia.com/id/sr3/cf8101e0-6375-455c-b39f-68c42b6a5043.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p7_image3 = ProductImage (
        product_id=7,
        url="https://n.nordstrommedia.com/id/sr3/c7f50ae5-0361-4fcb-9ad1-055a7cc40c12.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p7_image4 = ProductImage (
        product_id=7,
        url="https://n.nordstrommedia.com/id/sr3/717e5ab7-c046-4ba6-9070-936f9548592b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p8_image1 = ProductImage (
        product_id=8,
        url="https://n.nordstrommedia.com/id/sr3/58e65ceb-a016-47a3-97ed-6e5752a1eafe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )

    p8_image2 = ProductImage (
        product_id=8,
        url="https://n.nordstrommedia.com/id/sr3/8662f6b4-a481-46e8-8568-3e6f21dffd28.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p8_image3 = ProductImage (
        product_id=8,
        url="https://n.nordstrommedia.com/id/sr3/06e90149-8693-463c-adb6-06cf8b651736.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p8_image4 = ProductImage (
        product_id=8,
        url="https://n.nordstrommedia.com/id/sr3/45ea502b-404c-4a9d-aa90-034a4097ba30.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p9_image1 = ProductImage(
        product_id=9,
        url="https://n.nordstrommedia.com/id/sr3/71b806e7-7007-42d3-92dc-a0dcec07cbaa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )
    p9_image2 = ProductImage(
        product_id=9,
        url="https://n.nordstrommedia.com/id/sr3/f572c64e-a7a1-4755-8c9d-1cb84de713ad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p9_image3 = ProductImage(
        product_id=9,
        url="https://n.nordstrommedia.com/id/sr3/5151285a-140a-410a-998f-6e417e2e9fff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p10_image1 = ProductImage(
        product_id=10,
        url="https://n.nordstrommedia.com/id/sr3/4623e728-ea91-4003-89a4-7c0ebfb5557a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )
    p10_image2 = ProductImage(
        product_id=10,
        url="https://n.nordstrommedia.com/id/sr3/28d13b72-68a3-4691-ad49-ff8b6fc58fa3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p10_image3 = ProductImage(
        product_id=10,
        url="https://n.nordstrommedia.com/id/sr3/db44a2f4-ed6d-4413-b9dd-1239d0440a3f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p10_image4 = ProductImage(
        product_id=10,
        url="https://n.nordstrommedia.com/id/sr3/98120cff-5755-4648-91a8-0f58549eb267.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p11_image1 = ProductImage(
        product_id=11,
        url="https://n.nordstrommedia.com/id/sr3/2898a69a-364e-41ad-8d20-3d37e2cab341.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )
    p11_image2 = ProductImage(
        product_id=11,
        url="https://n.nordstrommedia.com/id/sr3/b04cf43d-680b-40a1-b95e-d494d50f84fa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p11_image3 = ProductImage(
        product_id=11,
        url="https://n.nordstrommedia.com/id/sr3/f75f281b-da34-43d7-b30f-7a236dad58f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p11_image4 = ProductImage(
        product_id=11,
        url="https://n.nordstrommedia.com/id/sr3/f91e7f82-6edc-46b5-811d-198efb4e3a8b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p12_image1 = ProductImage(
        product_id=12,
        url="https://n.nordstrommedia.com/id/sr3/d0711883-b03b-4c2b-aaf3-4d1f55ef72eb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )
    p12_image2 = ProductImage(
        product_id=12,
        url="https://n.nordstrommedia.com/id/sr3/96c8647e-a3b0-4a92-b166-af22bf28f258.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p12_image3 = ProductImage(
        product_id=12,
        url="https://n.nordstrommedia.com/id/sr3/251a1845-07f1-4b7c-a92c-cfd2ba2cee62.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p12_image4 = ProductImage(
        product_id=12,
        url="https://n.nordstrommedia.com/id/sr3/d72fbd57-ed63-4ec7-8111-af2cfdeef17b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p13_image1 = ProductImage(
        product_id=13,
        url="https://n.nordstrommedia.com/id/sr3/76450243-53b7-47a7-a803-56cae4cffc51.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=True
    )
    p13_image2 = ProductImage(
        product_id=13,
        url="https://n.nordstrommedia.com/id/sr3/23651a00-a280-4b45-8807-e7de77e204ff.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )
    p13_image3 = ProductImage(
        product_id=13,
        url="https://n.nordstrommedia.com/id/sr3/07663b7f-7142-408e-8764-1003bdf967b0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )
    p13_image4 = ProductImage(
        product_id=13,
        url="https://n.nordstrommedia.com/id/sr3/b6207001-884e-4373-b36c-766b1c200293.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )

    p14_image1 = ProductImage(
        product_id=14,
        url="https://n.nordstrommedia.com/id/sr3/ff57288c-0c5b-4067-b1e5-e30396a4f022.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=True
    )
    p14_image2 = ProductImage(
        product_id=14,
        url="https://n.nordstrommedia.com/id/sr3/67ce5970-4419-4588-9dd8-ca92451e99fd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )
    p14_image3 = ProductImage(
        product_id=14,
        url="https://n.nordstrommedia.com/id/sr3/58f5d164-cd3c-4f86-9417-fd35c3b5ec0b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )
    p14_image4 = ProductImage(
        product_id=14,
        url="https://n.nordstrommedia.com/id/sr3/b3a38380-3334-4cf4-92b2-90163476fd43.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )
    p15_image1 = ProductImage(
        product_id=15,
        url="https://n.nordstrommedia.com/id/sr3/dfadc666-00a3-484f-b58f-3123aa1eb791.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=True
    )
    p15_image2 = ProductImage(
        product_id=15,
        url="https://n.nordstrommedia.com/id/sr3/005a0288-4b34-4869-9843-50d767809843.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )
    p15_image3 = ProductImage(
        product_id=15,
        url="https://n.nordstrommedia.com/id/sr3/6b4e02a1-e735-4db6-80b6-39a8f69eaca7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )
    p15_image4 = ProductImage(
        product_id=15,
        url="https://n.nordstrommedia.com/id/sr3/f4eb6d49-1565-4c4f-8d39-b358342eec2f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )
    p16_image1 = ProductImage(
        product_id=16,
        url="https://n.nordstrommedia.com/id/sr3/015ccfff-ddeb-4720-b0e4-92db741b4915.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=True
    )
    p16_image2 = ProductImage(
        product_id=16,
        url="https://n.nordstrommedia.com/id/sr3/08819a1e-f8ba-48f3-ada7-9e51252d29a9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )
    p16_image3 = ProductImage(
        product_id=16,
        url="https://n.nordstrommedia.com/id/sr3/5482a6a2-ee72-4bc9-ae27-57fa69ebb9c1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )
    p16_image4 = ProductImage(
        product_id=16,
        url="https://n.nordstrommedia.com/id/sr3/4f40d914-f074-4a01-8a6d-8fb82b92ec08.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )
    p17_image1 = ProductImage(
        product_id=17,
        url="https://n.nordstrommedia.com/id/sr3/ba390ac9-20f9-43b5-a4bc-14b2db0342e1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=True
    )
    p17_image2 = ProductImage(
        product_id=17,
        url="https://n.nordstrommedia.com/id/sr3/c84e8699-ca84-48a9-be07-ad1b3ccf9eb2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )
    p17_image3 = ProductImage(
        product_id=17,
        url="https://n.nordstrommedia.com/id/sr3/a9faa733-c5af-4cff-81e6-e2adaea87e6b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )
    p17_image4 = ProductImage(
        product_id=17,
        url="https://n.nordstrommedia.com/id/sr3/deb25c38-c851-4bb4-a20d-257006ec17a5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )

    p18_image1 = ProductImage(
        product_id=18,
        url="https://n.nordstrommedia.com/id/sr3/8b0ba860-caf1-42ce-bfb3-5ca914be0673.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )
    p18_image2 = ProductImage(
        product_id=18,
        url="https://n.nordstrommedia.com/id/sr3/e636a35d-4e53-470f-90f7-5ba3fc88897e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p18_image3 = ProductImage(
        product_id=18,
        url="https://n.nordstrommedia.com/id/sr3/9b4dd817-8d3e-4c4b-b22c-a49e76b404a7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p18_image4 = ProductImage(
        product_id=18,
        url="https://n.nordstrommedia.com/id/sr3/a52173b7-a9a0-44eb-82ba-5124258a19de.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p19_image1 = ProductImage(
        product_id=19,
        url="https://n.nordstrommedia.com/id/sr3/ffd37831-3fe3-4e31-bb78-5b924316776f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )
    p19_image2 = ProductImage(
        product_id=19,
        url="https://n.nordstrommedia.com/id/sr3/6721f653-8552-4f54-9e25-1fde7765f765.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p19_image3 = ProductImage(
        product_id=19,
        url="https://n.nordstrommedia.com/id/sr3/91172c07-8efb-42a4-8857-72a1c3db0696.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p19_image4 = ProductImage(
        product_id=19,
        url="https://n.nordstrommedia.com/id/sr3/065cb056-f21a-4bf5-ba3c-85d349daf3a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p20_image1 = ProductImage(
        product_id=20,
        url="https://n.nordstrommedia.com/id/sr3/0c27f043-1741-4131-9f96-2a538a910500.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )
    p20_image2 = ProductImage(
        product_id=20,
        url="https://n.nordstrommedia.com/id/sr3/a2f26e1a-6e5f-437e-a472-8e5da4c6196d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p20_image3 = ProductImage(
        product_id=20,
        url="https://n.nordstrommedia.com/id/sr3/318189b5-226a-43a7-bdc0-cb9a2180054d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p20_image4 = ProductImage(
        product_id=20,
        url="https://n.nordstrommedia.com/id/sr3/c8a3f6e2-2fca-4d48-a9dc-050e3da35eb5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p21_image1 = ProductImage(
        product_id=21,
        url="https://n.nordstrommedia.com/id/sr3/7b21c25f-bd64-4415-b6d9-499779ff1c19.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )
    p21_image2 = ProductImage(
        product_id=21,
        url="https://n.nordstrommedia.com/id/sr3/67a28a6b-7a41-4e36-b10f-f4d785ff17b5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p21_image3 = ProductImage(
        product_id=21,
        url="https://n.nordstrommedia.com/id/sr3/f92587ee-a357-41d3-aec8-c4e2d0468fcf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p21_image4 = ProductImage(
        product_id=21,
        url="https://n.nordstrommedia.com/id/sr3/bbd053a0-b8d6-469b-ab98-504dbae049fc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p22_image1 = ProductImage(
        product_id=22,
        url="https://n.nordstrommedia.com/id/sr3/9a0f753f-509e-40fa-8526-b402cda33234.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=True
    )
    p22_image2 = ProductImage(
        product_id=22,
        url="https://n.nordstrommedia.com/id/sr3/0f5f2cf2-0368-4976-9015-d4cafd029b7f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )
    p22_image3 = ProductImage(
        product_id=22,
        url="https://n.nordstrommedia.com/id/sr3/37d86f01-ef90-4c40-9006-f009968b89a9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )
    p22_image4 = ProductImage(
        product_id=22,
        url="https://n.nordstrommedia.com/id/sr3/69da6b24-53ec-403c-af72-98ac850e5b1d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
        preview=False
    )

    p23_image1 = ProductImage(
        product_id=23,
        url="https://n.nordstrommedia.com/id/sr3/7cfb21be-ddcc-47a5-89b3-fc8dbd22d101.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )
    p23_image2 = ProductImage(
        product_id=23,
        url="https://n.nordstrommedia.com/id/sr3/113cb756-5e79-427e-a8c8-4f6154dd45bb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p23_image3 = ProductImage(
        product_id=23,
        url="https://n.nordstrommedia.com/id/sr3/5cce4096-f9ca-4dd2-9f36-7b45a429eee2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p23_image4 = ProductImage(
        product_id=23,
        url="https://n.nordstrommedia.com/id/sr3/7cfb21be-ddcc-47a5-89b3-fc8dbd22d101.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p24_image1 = ProductImage(
        product_id=24,
        url="https://n.nordstrommedia.com/id/sr3/a4526efc-3222-41a7-85dc-6f2f28658cae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )
    p24_image2 = ProductImage(
        product_id=24,
        url="https://n.nordstrommedia.com/id/sr3/1fa73023-8a30-43bc-bd5a-1d479fae68e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p24_image3 = ProductImage(
        product_id=24,
        url="https://n.nordstrommedia.com/id/sr3/97a2b731-9779-47c3-bae2-5b11b0abaac3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p24_image4 = ProductImage(
        product_id=24,
        url="https://n.nordstrommedia.com/id/sr3/ed50c7c4-44f4-4928-a978-0645a2898a94.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p25_image1 = ProductImage(
        product_id=25,
        url="https://n.nordstrommedia.com/id/sr3/13c5c1c7-2ffc-4de2-a54e-d39e721cb275.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )
    p25_image2 = ProductImage(
        product_id=25,
        url="https://n.nordstrommedia.com/id/sr3/f7a584b2-7761-4f1b-a04b-cbbf0faba5de.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p25_image3 = ProductImage(
        product_id=25,
        url="https://n.nordstrommedia.com/id/sr3/800d9f73-e7a9-4471-a74e-0cdbd237100b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p25_image4 = ProductImage(
        product_id=25,
        url="https://n.nordstrommedia.com/id/sr3/13c5c1c7-2ffc-4de2-a54e-d39e721cb275.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p26_image1 = ProductImage(
        product_id=26,
        url="https://n.nordstrommedia.com/id/sr3/8277b51a-2a9b-4617-aee4-56ee6b2bc3c2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )
    p26_image2 = ProductImage(
        product_id=26,
        url="https://n.nordstrommedia.com/id/sr3/1a1306c1-b081-4977-82bb-228145317d40.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p26_image3 = ProductImage(
        product_id=26,
        url="https://n.nordstrommedia.com/id/sr3/2ef76c08-63b6-4677-967b-04221928ff5b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p26_image4 = ProductImage(
        product_id=26,
        url="https://n.nordstrommedia.com/id/sr3/afa66331-8366-4c31-a51f-c0411965d222.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p27_image1 = ProductImage(
        product_id=27,
        url="https://n.nordstrommedia.com/id/sr3/1b537890-23cc-4377-a73c-7f361a3cd2f1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )
    p27_image2 = ProductImage(
        product_id=27,
        url="https://n.nordstrommedia.com/id/sr3/8dd1cea0-5d5e-4ba3-8570-13b519e4f6aa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p27_image3 = ProductImage(
        product_id=27,
        url="https://n.nordstrommedia.com/id/sr3/d5332915-7aff-4d8a-8fe7-8c0430e14bf5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p27_image4 = ProductImage(
        product_id=27,
        url="https://n.nordstrommedia.com/id/sr3/414d33f5-5edc-4977-89b9-ff5a7394c387.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p28_image1 = ProductImage(
        product_id=28,
        url="https://n.nordstrommedia.com/id/sr3/c6c772aa-3ffa-4aef-9c4b-29195f846179.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )
    p28_image2 = ProductImage(
        product_id=28,
        url="https://n.nordstrommedia.com/id/sr3/457c4aa2-a9c9-4195-9e05-187b8962a0ad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p28_image3 = ProductImage(
        product_id=28,
        url="https://n.nordstrommedia.com/id/sr3/e8bba5cf-ae66-441a-9f5c-0c95f9dbb97d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p28_image4 = ProductImage(
        product_id=28,
        url="https://n.nordstrommedia.com/id/sr3/d32e2409-6d63-4691-a6c6-79b55d9d7dc8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p29_image1 = ProductImage(
        product_id=29,
        url="https://n.nordstrommedia.com/id/sr3/b7a9950e-478e-40b2-8e93-c2281fe2f827.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )
    p29_image2 = ProductImage(
        product_id=29,
        url="https://n.nordstrommedia.com/id/sr3/2255e852-5e12-479d-8e65-a6838d4b5680.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p29_image3 = ProductImage(
        product_id=29,
        url="https://n.nordstrommedia.com/id/sr3/74060a92-3dc1-4c7b-a47f-bd25f760c1e5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )
    p29_image4 = ProductImage(
        product_id=29,
        url="https://n.nordstrommedia.com/id/sr3/b929b293-95c4-49f6-a846-d549e374a1fd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )







    db.session.add(p1_image1)
    db.session.add(p1_image2)
    db.session.add(p1_image3)
    db.session.add(p1_image4)

    db.session.add(p2_image1)
    db.session.add(p2_image2)
    db.session.add(p2_image3)
    db.session.add(p2_image4)

    db.session.add(p3_image1)
    db.session.add(p3_image2)
    db.session.add(p3_image3)
    db.session.add(p3_image4)

    db.session.add(p4_image1)
    db.session.add(p4_image2)
    db.session.add(p4_image3)
    db.session.add(p4_image4)

    db.session.add(p5_image1)
    db.session.add(p5_image2)
    db.session.add(p5_image3)
    db.session.add(p5_image4)

    db.session.add(p6_image1)
    db.session.add(p6_image2)
    db.session.add(p6_image3)
    db.session.add(p6_image4)

    db.session.add(p7_image1)
    db.session.add(p7_image2)
    db.session.add(p7_image3)
    db.session.add(p7_image4)

    db.session.add(p8_image1)
    db.session.add(p8_image2)
    db.session.add(p8_image3)
    db.session.add(p8_image4)

    db.session.add(p9_image1)
    db.session.add(p9_image2)
    db.session.add(p9_image3)

    db.session.add(p10_image1)
    db.session.add(p10_image2)
    db.session.add(p10_image3)
    db.session.add(p10_image4)

    db.session.add(p11_image1)
    db.session.add(p11_image2)
    db.session.add(p11_image3)
    db.session.add(p11_image4)

    db.session.add(p12_image1)
    db.session.add(p12_image2)
    db.session.add(p12_image3)
    db.session.add(p12_image4)

    db.session.add(p13_image1)
    db.session.add(p13_image2)
    db.session.add(p13_image3)
    db.session.add(p13_image4)

    db.session.add(p14_image1)
    db.session.add(p14_image2)
    db.session.add(p14_image3)
    db.session.add(p14_image4)

    db.session.add(p15_image1)
    db.session.add(p15_image2)
    db.session.add(p15_image3)
    db.session.add(p15_image4)

    db.session.add(p16_image1)
    db.session.add(p16_image2)
    db.session.add(p16_image3)
    db.session.add(p16_image4)

    db.session.add(p17_image1)
    db.session.add(p17_image2)
    db.session.add(p17_image3)
    db.session.add(p17_image4)

    db.session.add(p18_image1)
    db.session.add(p18_image2)
    db.session.add(p18_image3)
    db.session.add(p18_image4)

    db.session.add(p19_image1)
    db.session.add(p19_image2)
    db.session.add(p19_image3)
    db.session.add(p19_image4)

    db.session.add(p20_image1)
    db.session.add(p20_image2)
    db.session.add(p20_image3)
    db.session.add(p20_image4)

    db.session.add(p21_image1)
    db.session.add(p21_image2)
    db.session.add(p21_image3)
    db.session.add(p21_image4)

    db.session.add(p22_image1)
    db.session.add(p22_image2)
    db.session.add(p22_image3)
    db.session.add(p22_image4)

    db.session.add(p23_image1)
    db.session.add(p23_image2)
    db.session.add(p23_image3)
    db.session.add(p23_image4)

    db.session.add(p24_image1)
    db.session.add(p24_image2)
    db.session.add(p24_image3)
    db.session.add(p24_image4)

    db.session.add(p25_image1)
    db.session.add(p25_image2)
    db.session.add(p25_image3)
    db.session.add(p25_image4)

    db.session.add(p26_image1)
    db.session.add(p26_image2)
    db.session.add(p26_image3)
    db.session.add(p26_image4)

    db.session.add(p27_image1)
    db.session.add(p27_image2)
    db.session.add(p27_image3)
    db.session.add(p27_image4)

    db.session.add(p28_image1)
    db.session.add(p28_image2)
    db.session.add(p28_image3)
    db.session.add(p28_image4)

    db.session.add(p29_image1)
    db.session.add(p29_image2)
    db.session.add(p29_image3)
    db.session.add(p29_image4)

    db.session.commit()

def undo_product_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.product_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM product_images")
