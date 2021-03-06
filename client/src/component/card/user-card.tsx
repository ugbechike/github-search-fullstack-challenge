import React from "react";
import { ItemElement} from "../../utils/types";
import { Card } from "./card";
import { Box } from "../base/box";
import { Text } from "../base/text";
import {
  AiOutlineUsergroupAdd,
  FiUsers,
  GoRepo,
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
} from "react-icons/all";
import { BaseSimpleGrid } from "../base/base-simple-grid";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-store/root-reducer";

export const UserCard = () => {
  const { searchResult } = useSelector((state: RootState) => state.search) || {};
  const data = searchResult.data?.items || [];

  return (
    <BaseSimpleGrid>
      {data?.map((item: ItemElement, index: number) => {
        const { owner, html_url } = item || {};
        const {public_repos, followers, avatar_url, name, login, location, company, bio, following} = owner;
        return (
          <Card key={index}>
            <a href={html_url} target='_blank' rel='noreferrer'>
            <Box className={"user-card-flex"}>
              <img
                src={avatar_url}
                style={{ height: 50, width: 50, borderRadius: 25 }}
                alt={"profile_pix"}
              />
              <Box className={"user-card-content-wrapper"}>
                {name !== null && (
                  <Text className={"user-card-name"}>{name}</Text>
                )}
                <Text className={"user-card-login"}>{login}</Text>
              </Box>
            </Box>
            <Box className={"details-section"}>
              <Box className={"user-card-company-wrapper"}>
                <HiOutlineLocationMarker size={14} color={"red"} />
                <Text className={"user-card-company"}>
                  {location ? location : "N/A"}
                </Text>
              </Box>

              <Box className={"user-card-company-wrapper"}>
                <HiOutlineOfficeBuilding size={14} color={"#4A5568"} />
                <Text className={"user-card-company"}>
                  {company ? company : "N/A"}
                </Text>
              </Box>
            </Box>

            <Box className={"user-card-details-wrapper"}>
              <Text className={"user-card-bio"}>{bio}</Text>
            </Box>
            <Box className={"user-card-footer"}>
              <Box className={"user-card-flex"}>
                <FiUsers size={14} color={"#4A5568"} />
                <Text className={"user-card-following-number"}>
                  {following}
                </Text>
                <Text className={"user-card-following-text"}>following</Text>
              </Box>
              <Box className={"user-card-flex"}>
                <AiOutlineUsergroupAdd size={14} color={"#4A5568"} />
                <Text className={"user-card-following-number"}>
                  {followers}
                </Text>
                <Text className={"user-card-following-text"}>followers</Text>
              </Box>
              <Box className={"user-card-flex"}>
                <GoRepo size={14} color={"#4A5568"} />
                <Text className={"user-card-following-number"}>
                  {public_repos}{" "}
                </Text>
                <Text className={"user-card-following-text"}>repos</Text>
              </Box>
            </Box>
            </a>
          </Card>
        );
      })}
    </BaseSimpleGrid>
  );
};
