import Logo from 'components/navbar/Homebutton';
import { useNavigate } from 'react-router-dom';
import { Container, Layout } from 'util/GlobalStyle';

const PostingPage = () => {
  const navigate = useNavigate();
  const category = [
    '한식',
    '중식',
    '일식',
    '양식',
    '태국 음식',
    '닭고기',
    '소고기',
    '돼지고기',
    '면',
    '태그를',
    '어떻게',
    '나누죠',
  ];
  return (
    <Layout>
      <Container>
        <Logo />
        <div className="w-full bg-[#fbf7ef] h-full rounded-2xl outline outline-1 shadow-2xl outline-[#fefaf4] shadow-[#fa9a00] mt-14 p-10">
          <div className="text-xl mt-3">1. 어떤 음식점을 등록하시고 싶으신가요?</div>
          <div className="mt-5 flex">
            <input className="w-full rounded-xl mr-4 p-2"></input>
            <button className="bg-orange-200 w-14 rounded-xl">검색</button>
          </div>

          <div className="text-xl mt-7">2. 별점을 매겨주세요.</div>
          <div className="mt-3 flex">
            <select className="w-full rounded-xl mr-4 p-2">
              <option>⭐</option>
              <option>⭐⭐</option>
              <option>⭐⭐⭐</option>
              <option>⭐⭐⭐⭐</option>
              <option>⭐⭐⭐⭐⭐</option>
            </select>
          </div>

          <div className="text-xl mt-7">3. 음식점에 대한 경험을 알려주세요.</div>
          <div className="mt-3 flex">
            <textarea className="w-full rounded-xl mr-4 p-2"></textarea>
          </div>
          <div className="text-xl mt-7">4. 음식점의 카테고리를 설정해주세요.</div>
          <div className="mt-3 flex">
            {category.map((item) => {
              return (
                <button className="py-1 px-3 bg-yellow-300 m-2 rounded-2xl text-[#7c7a7a]">
                  {item}
                </button>
              );
            })}
          </div>
          <div className="w-full flex justify-start">
            <button
              className="absolute bottom-0 p-3 bg-orange-300 rounded-2xl"
              onClick={() => navigate('/')}
            >
              나가기
            </button>
          </div>
          <div className="w-full flex justify-end">
            <button className="absolute bottom-0 p-3 bg-orange-300 rounded-2xl"> 제출하기 </button>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default PostingPage;
