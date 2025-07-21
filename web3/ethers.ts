import { ethers } from 'ethers';
import { abi, address as contractAddress } from '../abis/DataType.json'; // Todo: 배포먼저 실행해주세요. (npm run deploy)
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const provider = new ethers.JsonRpcProvider('http://127.0.0.1:7545'); // 가나슈의 RPC SERVER 주소
const privateKey = process.env.PRIVATE_KEY || '';

export const checkNetworkInfo = async () => {
  return await provider.getNetwork();
};
/*
    위의 코드들은 지우지 않습니다.
    
    getSigner와 getContract는 다음의 데이터를 이용하여 구현합니다.

    provider : JSON-RPC API를 통해 블록체인과 통신하는 역할자
    abi : DataType Contract의 ABI 데이터
    contractAddress : DataType Contract의 Address
    privateKey : .env 파일에 설정된 가나슈 계정의 프라이빗 키
*/

export const getSigner = () => {
  // privateKey를 이용하여 Wallet 인스턴스를 리턴
  return new ethers.Wallet(privateKey, provider);
};

export const getContract = () => {
  // DataType Contract 인스턴스를 리턴
  return new ethers.Contract(contractAddress, abi, getSigner());
};

export const positiveNumber = async () => {
  return await getContract().positiveNumber();
};

export const negativeNumber = async () => {
  return await getContract().negativeNumber();
};

export const isActive = async () => {
  return await getContract().isActive();
};

export const wallet = async () => {
  return await getContract().wallet();
};

export const recipient = async () => {
  return await getContract().recipient();
};

export const fixedData = async () => {
  return await getContract().fixedData();
};

export const dynamicData = async () => {
  return await getContract().dynamicData();
};

export const currentState = async () => {
  return await getContract().currentState();
};

export const getDynamicDataLength = async () => {
  return await getContract().getDynamicDataLength();
};

export const getDetails = async () => {
  return await getContract().getDetails();
};

export const setPositiveNumber = async (_positive: number) => {
  return await getContract().setPositiveNumber(_positive);
};

export const setNegativeNumber = async (_negative: number) => {
  return await getContract().setNegativeNumber(_negative);
};

export const toggleActive = async () => {
  return await getContract().toggleActive();
};

export const setState = async (_newState: number) => {
  return await getContract().setState(_newState);
};

export const setWallet = async (address: string) => {
  return await getContract().setWallet(address);
};

export const setFixedData = async (_newFixedData: string) => {
  return await getContract().setFixedData(_newFixedData);
};

export const setDynamicData = async (_newDynamicData: string) => {
  return await getContract().setDynamicData(_newDynamicData);
};
