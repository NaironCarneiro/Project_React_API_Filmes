import styled from "styled-components";

export const Container = styled.div`

padding: 4rem 0;

h1{
  margin: 3rem 0;
}

img{
  width: 300px;
  border-radius: 1rem;
}

.movie{
  display: flex;
  align-items: center;
   justify-content: center;
}

.details{
  display: flex;
  flex-direction: column;
  max-width: 50%;
  align-items: flex-start;
  margin-left: 4rem;
}

button{
  border: none;
  background-color: #6654da;
  color: white;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 100%;
  margin-top: 1rem ;
  padding: 0.8rem 2rem;
  transition: all 0.3s;
}

button:hover{
  background-color: #5848c2;
}

span{
  line-height:130% ;
  margin-bottom: 1rem;
}

.date-release{
  opacity: 0.5;
}



`